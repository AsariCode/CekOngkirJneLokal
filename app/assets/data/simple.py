import json

# Read JSON file
alreadyinput = []
toinput = []
with open('datajson.json', 'r') as file:
    data = json.load(file)
    for dt in data["Sheet"]:
        key = f"{dt['KEC']}{dt['KAB']}"
        print(key)
        if not key in alreadyinput:
            toinput.append(dt)
            alreadyinput.append(key)
with open('simpledata.json', 'w') as file:
    json.dump(toinput, file)