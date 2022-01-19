# A Django API for groovy rentals

## Prerequisites

You will need the following things properly installed on your computer (unless using Docker).

- [Git](https://git-scm.com/)
- [Python](https://www.python.org/)
- [Poetry](https://python-poetry.org/)

## Installation

- `git clone <repository-url>` this repository
- `cd backend`
- `poetry install`

## Running / Development

- `poetry shell` - this must be ran before everything as it sets up your shell with the project's python environment
- If it's your first time running the app or you need to run a database migration you need to do `python manage.py migrate`
- `python manage.py runserver`
- Visit your app at [http://127.0.0.1:8000](http://127.0.0.1:8000).
  - If you want some data to play with you can load the fixture with:
  - `python manage.py loaddata initial-data.json`
- Visit the Django Admin at [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin).
  - You will also need to create a superuser, you can do so with:
  - `DJANGO_SUPERUSER_PASSWORD=admin DJANGO_SUPERUSER_USERNAME=admin DJANGO_SUPERUSER_EMAIL=admin@example.com python manage.py createsuperuser --noinput`
- Visit the browseable API at [http://127.0.0.1:8000/api/rentals](http://127.0.0.1:8000/api/rentals).
- Visit the API Documentation at [http://127.0.0.1:8000/swagger-ui/](http://127.0.0.1:8000/swagger-ui/)
- If using docker: `docker-compose up backend`
  - This should set up everything including an administrator account with initial data.

### Running Tests

- `pytest`

### Linting

- `flake8 .`

### Deploying

If you would like to deploy this make sure to follow the [official deployment checklist](https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/). Additionaly, ensure the superuser has a secure password.

## Further Reading / Useful Links

- [Django](https://docs.djangoproject.com/en/3.2/)
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Django Rest Framework JSONAPI](https://github.com/django-json-api/django-rest-framework-json-api)
