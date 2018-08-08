import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public object_feed = {
    title: "Feed",
    user_name: "Bira Chamma",
    user_comment: "Marty McFly",
    date: "November 6, 1955",
    likes_quant: 12,
    comments: 4,
    time_ago: 12
  }

  // public user_name:string = "Bira Chamma";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  public myFirstPlus (num1:number, num2:number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLastestMovie().subscribe (
        data => {
          // const response = (data as any);
          // const object_response = JSON.parse(response._body);
          // console.log(object_response);
          console.log (data);
        }, error => {
          console.log(error);
        }
      );
  }

}
