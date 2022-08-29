import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass']
})
export class HelloComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { 
  }
  activeLink : string = "index"
  inscricao: Subscription | undefined

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params : any)=>{
      this.activeLink = params['option']
    })
  }

  ngOnDestroy(){
    if(this.inscricao != undefined){
      this.inscricao.unsubscribe()
    }
  }

}
