# Prevent default echo of commands and "[target] is up to date" messages
.SILENT:

# NOTE .PHONY denotes that the target does _not_ correspond to any local file of the same name (true of all our targets)
.PHONY: $(MAKECMDGOALS)

# These just enable reuse and single-place modification of common commands
COMPOSE = docker compose
COMPOSE_RUN = ${COMPOSE} run -u $$(id -u):$$(id -g) --env HOME="." --env USER=$${USER} --rm --service-ports
COMPOSE_RUN_TARGET = ${COMPOSE_RUN} $@

# Extract first target passed to make
CMD := $(wordlist 1,1,$(MAKECMDGOALS))

# This parses additional arguments beyond the first target and stores them in a variable for later use
CMD_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))

# Don't define any targets if we're just trying to invoke a shell on a compose service (avoids make redefine warnings)
ifneq ($(CMD),shell)

help:      ## Show this help
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

npm:       ## Run npm commands
	${COMPOSE_RUN_TARGET} npm $(CMD_ARGS)

endif

shell:	   ## Obtain a shell in the given compose service / container (e.g. `make shell aws`)
	${COMPOSE_RUN} --user root --entrypoint /bin/sh $(CMD_ARGS)
