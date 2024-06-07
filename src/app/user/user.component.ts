import { Component, Input, computed, input } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // essa é a propriedade que armazena o signal e que deve ser executada como função no html para obter o valor mais recente dela
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `users/${this.selectedUser().avatar}`)


  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string

  // get imagePath(){
  //   return `users/${this.avatar}`
  // }

  avatar = input.required(); // usa signal somente para leitura e nao podem ser alterados
  name =  input.required();

  imagePath = computed(() => `users/${this.avatar()}`)

  onSelectUser(){

  }

}
