import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public nameOfOA: any = [];
  public namesung: any = '';
  public descsung: any = '';
  public typesung: any = '';
  constructor() {}
  logo =
    'https://cdn-icons.flaticon.com/png/128/2112/premium/2112502.png?token=exp=1636872948~hmac=b0ce0f07c56ce9bd1a09413b4a3c0fb0';
  doneLogo = 'https://cdn-icons-png.flaticon.com/128/60/60516.png';
  undoneLogo = 'https://cdn-icons-png.flaticon.com/128/66/66758.png';
  removeLogo = 'https://cdn-icons-png.flaticon.com/128/1214/1214428.png';
  todoLogo = 'https://cdn-icons-png.flaticon.com/128/4552/4552699.png';
  ngOnInit(): void {}

  addItem(x: any) {
    this.nameOfOA.push(x);
    this.namesung = ''; //to clear the input text box
    this.descsung = '';
    this.typesung = '';
    document.getElementById('name')?.focus(); //? if null yung element hidni na mag fofocus. giangamit para mag focus doon sa textbaox for name
  }

  remove(x: any) {
    this.nameOfOA.splice(x, 1);
  }

  done(x: any) {
    document.getElementById(x)!.style.textDecoration = 'line-through';
  }

  undone(x: any) {
    document.getElementById(x)!.style.textDecoration = 'none';
  }
}
