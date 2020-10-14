FROM node:12.19.0

ENV NODE_VERSION 12.19.0

WORKDIR /Users/pawelg/Documents/rabbitmq_project

COPY ./ ./

RUN npm install
# RUN npm instal
# image build step

CMD ["/bin/bash"]
# executes by default while lunching the build image
# can have only one command

# CMD [ "node" ]