import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class ImageProvider {

constructor(private _CAMERA : Camera)
   { }
   
    /**
   *
   * @public
   * @method selectPhotograph
   * @return {Promise}
   */
   selectPhotograph() : Promise<any>
   {
      return new Promise((resolve) =>
      {
         let cameraOptions : CameraOptions = {
             sourceType         : this._CAMERA.PictureSourceType.PHOTOLIBRARY,
             destinationType    : this._CAMERA.DestinationType.FILE_URI,
	         quality            : 100,
	         targetWidth        : 320,
	         targetHeight       : 240,
	         encodingType       : this._CAMERA.EncodingType.JPEG,
	         correctOrientation : true
         };

         this._CAMERA.getPicture(cameraOptions)
         .then((data : any) =>
         {
            resolve(data);
         });

      });
   }

}