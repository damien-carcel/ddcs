#######################################
# Intermediate image used to prepare  #
# the application for production      #
#######################################

FROM node:slim as builder

USER node
RUN mkdir /home/node/ddcs
WORKDIR /home/node/ddcs

COPY --chown=node:node . .
RUN yarn install && yarn run build

###################################
# Nginx image used for production #
###################################

FROM nginx:alpine as prod

# Copy the application
COPY --from=builder --chown=root:root /home/node/ddcs/dist /usr/share/nginx/html
