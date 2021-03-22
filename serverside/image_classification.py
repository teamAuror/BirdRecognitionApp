
import numpy as np
from keras.preprocessing import image
from keras.models import load_model

def recognition():
    birdo_model = load_model('birdo_model.h5') #load the trained model
    birdo_model.summary() #display the summaryof the model
    #print(birdo_model)
    #fetch the saved image and convert the image size into 224,224 pixel
    saved_image = image.load_img("images\\" + 'saved_image.jpg', target_size=(224, 224))
    saved_image = image.img_to_array(saved_image) #fetch the 2 dimensional array from the image
    saved_image = np.expand_dims(saved_image, axis=0)
    #print("Test Image: ", saved_image)
    prediction = birdo_model.predict(saved_image)
    #print("Result: ", prediction)
    final_prediction = prediction[0]
    #print("Result 1: ", final_prediction)
    for k in range(250):
        if final_prediction[k] == 1:
            break
    return k

if __name__ == '__main__':
    recognition()

