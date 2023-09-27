# we are going to make a api using fast api
from fastapi import FastAPI
# this is the starting point for the api
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World", "steven": "beta"}

""""

""""