import os
import base64

# get the current directory
current_directory = os.path.dirname(os.path.abspath(__file__))

#save image in a folder called 'images'
def save(value):
    target = os.path.join(current_directory, 'images/') #target folder is images which located in working directory.
    # create a images folder, if it is not already created.
    if not os.path.isdir(target):
        os.mkdir(target)
    image_path = os.path.join(target, 'saved_image.jpg') # save the image as 'saved_image.jpg'
    #base64 decoding
    with open(image_path, "wb") as file:
        file.write(base64.decodebytes(value))
        print('image saved.')

if __name__ == '__main__':
    save()

