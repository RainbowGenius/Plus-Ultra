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
    time_ago: 12
  }

  public movie_list = new Array<any>();

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
          this.movie_list = data['results'];
          console.log ("Filmes populares:",this.movie_list);
        }, error => {
          console.log(error);
        }
      );
  }

}
