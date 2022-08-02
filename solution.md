Build Docker:
Prerequisites:
- have docker installed (for running in docker)


docker build -f Dockerfile -t projectpurplecow .
docker run -t -p 3000:3000 projectpurplecow

Using Material UI to be able to quickly setup and style react components