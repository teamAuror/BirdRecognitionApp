# importing components
import os
import requests
from flask import Flask, request, jsonify
import save_image, image_classification

app = Flask(__name__)

# get the current directory
current_directory = os.path.dirname(os.path.abspath(__file__))
prediction_index = 1

# getting all bird names
# here just to testing purposes
birdName = ""
birdScName = ""
birdLocation = ""
success = False


@app.route('/')
def index():
    return 'Bird recognition system.'


@app.route('/classification', methods=["POST", "GET"])
def classification():
    # print('method works')
    json_data = request.json
    value = bytes(json_data['image'], 'utf-8')
    save_image.save(value)  # process decode and save the image
    index = image_classification.recognition()  # prediction
    global prediction_index
    prediction_index = index
    print(index)
    return "", 204


@app.route('/bird', methods=["GET"])
def bird():
    # invoke url of the aws dynamo db database
    url = "https://15c071drx0.execute-api.us-east-2.amazonaws.com/birdov2/birdo_bird_details?birdID="
    global prediction_index
    # concatenate url with the key
    url_with_key = url + str(prediction_index + 1)
    bird_details = requests.request("GET", url_with_key)
    bird_details = bird_details.json()
    return jsonify({
        "bird": bird_details['body']['birdName'],
        "birdScName": bird_details['body']['birdScName'],
        "location": bird_details['body']['location']
    })



@app.route('/birdDes', methods=["POST", "GET"])
def search():
    global birdName, birdScName, birdLocation
    birdName = ""
    birdScName = ""
    birdLocation = ""
    json_data = request.json
    bird_name = json_data['birdName'].upper()
    try:
       url = "https://twm47yfmxg.execute-api.us-east-2.amazonaws.com/birdoSearch/birdo_bird_details?birdName="
       # concatinate url with the birdName
       url_with_bird = url + bird_name
       bird_details = requests.request("GET", url_with_bird)
       bird_details = bird_details.json()
       print(bird_details["body"][0])
       birdName =  bird_details['body'][0]['birdName']
       birdScName = bird_details['body'][0]['birdScName']
       birdLocation = bird_details['body'][0]['location']
       return jsonify({
               "bird": bird_details['body'][0]['birdName'],
               "birdScName": bird_details['body'][0]['birdScName'],
               "location": bird_details['body'][0]['location']
           })
    except:
        print("null")
        return {"bird" : "null"}


@app.route('/dataFromDB',methods=["GET"])
def data_db():
    return jsonify({
        "bird": birdName,
        "birdScName": birdScName,
        "location": birdLocation,
        "birdImage": "https://birdobird-images.s3.us-east-2.amazonaws.com/"+birdName.lower()+".jpg"
    })


@app.route('/tagLocation', methods=["POST"])
def tag_location():
    json_data = request.json
    bird_name = json_data['birdName'].upper()
    bird_location = json_data['birdLocation']
    url = "https://w7v57l6d77.execute-api.us-east-2.amazonaws.com/birdoUpdate/birdo_bird_details?birdName="
    url_name_location = url+bird_name+"&birdLocation="+bird_location
    status = requests.request("GET", url_name_location)
    status = status.json()
    global success
    print(status["statusCode"])
    if (status["statusCode"] == 200):
        success = True
        return {"return": "success"}
    else:
        success = False
        return {"return": "unsuccess"}




@app.route('/locationSuccess', methods=["GET"])
def success_tag():
    return {"success": success}


if __name__ == '__main__':
    app.run(host='192.168.8.198', debug=True)
