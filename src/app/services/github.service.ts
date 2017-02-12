import {Injectable} from '@angular/core'
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = "580b30f3ba6ef7832c2d";
  private client_secret = "63aac11cddd14ab42029205bd733caf149015acf";

  constructor(private  _http: Http) {
    this.username = 'bradtraversy';
  }

  getUser() {
    const apikey = '?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
    return this._http.get('http://api.github.com/users/' + this.username + apikey)
      .map(res => res.json());
  }

  getRepos() {
    const apikey = '?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
    return this._http.get('http://api.github.com/users/' + this.username + '/repos' + apikey)
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
