import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { MediaPlugin } from 'ionic-native';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	file: MediaPlugin;
	status: any;
	constructor(platform: Platform) {
		//this.file = new MediaPlugin('../android_asset/www/assets/song.m4a');

		// Catch the Success & Error Output
		// Platform Quirks
		// iOS calls success on completion of playback only
		// Android calls success on completion of playback AND on release()
		
		/*this.file.init.then(() => {
		  console.log('Playback Finished');
		}, (err) => {
		  console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message);
		});*/
		
		platform.ready().then(() => {
			this.file = new MediaPlugin('/android_asset/www/assets/song.m4a',(status) => {
				console.log(status);
				this.status = status;
			});
	 
		});
	}
  
	
  
	onPlay = function(){
		console.log('playing...');
		// play the file
		console.log(this.file);
		this.file.play();
	}
	
	onPause = function(){
		console.log('playing...');
		// play the file
		console.log(this.file);
		this.file.pause();
	}
	
}
