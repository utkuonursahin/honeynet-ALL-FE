import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ScrawlDetails} from "../interface/ScrawlDetails";

@Injectable({
  providedIn: 'root'
})
export class ScrawlDetectionService {
  constructor(private http: HttpClient) { }

  handleScrawlDetection({targetElementId}:ScrawlDetails){
    this.http.post('/scrawl-attempt', {targetElementId}).subscribe();
  }
}
