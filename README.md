# groovy rentals

TODO

## Development

To run the full stack at once the easiest way is with [Docker](https://docs.docker.com/get-started/). If you don't get docker-compose by default (like if you use linux) then [you will need to install that too](https://docs.docker.com/compose/install/). With docker installed you can run (in the this folder) `docker-compose up`. This will automatically reload the frontend and backend upon any changes. If you just want to run the backend for example you can do `docker-compose up backend`. For debugging you can open a shell in one of them with `docker-compose run backend bash` and execute your commands.

Otherwise you will need to setup the frontend and backend using the requisite tools.

- [Frontend documentation](./frontend/README.md)
- [Backend documentation](./backend/README.md)
