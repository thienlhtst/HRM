import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'language-header',
  templateUrl: './language-header.component.html',
  styleUrls: ['./language-header.component.scss']
})
export class LanguageHeaderComponent implements OnInit {
  @ViewChildren('myDiv') myDivs!: QueryList<ElementRef>;

  
  IsMenuCollapsed = false;
  selectedLanguage:any={
    id:'1',
    name:'Tiếng Việt',
    icon:'custom-icon vietnam_icon'
  }
  lanchangevn:any[]=[
    {
      id:'1',
      name:'Tiếng Việt',
      icon:'custom-icon vietnam_icon'
    },
    {
      id:'0',
      name:'Tiếng Anh',
      icon:'custom-icon america_icon'
    }
  ]
  lanchangeus:any[]=[
    {
      id:'1',
      name:'Vietnamese',
      icon:'custom-icon vietnam_icon'
    },
    {
      id:'0',
      name:'English',
      icon:'custom-icon america_icon'
    }
  
  ]
  elementRef: any;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    if(localStorage.getItem('language')){
      if(localStorage.getItem('language')=='1'){
        this.selectedLanguage=this.lanchangevn.find(x=>x.id==localStorage.getItem('language'));
      }else
      this.selectedLanguage=this.lanchangevn.find(x=>x.id==localStorage.getItem('language'));
    }
    this.renderer.listen('document', 'click', (event) => {
      this.handleClickOutside(event);
    });
  }
  toggleMenu() {
    this.IsMenuCollapsed = !this.IsMenuCollapsed;
  }
  handleClickOutside(event: MouseEvent) {
    let clickedInside = false;
    // Kiểm tra nếu click vào bất kỳ thẻ div nào
    this.myDivs.forEach(div => {
      if (div.nativeElement.contains(event.target)) {
        clickedInside = true;
      }
    });
    if (!clickedInside) {
      this.IsMenuCollapsed=false;
    }
  }
  changeLanguage(item:any){
    this.selectedLanguage=item;
    localStorage.setItem('language',item.id);
    this.IsMenuCollapsed=false;
    window.location.reload();
  }
 

 
}
