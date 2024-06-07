import { Component, EventEmitter, Input, Output, computed, output } from '@angular/core';


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

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string
  // @Output() select = new EventEmitter();
  select = output<string>(); // não cria signal de saída, apenas um evento personalizado que pode ser emitido, ele existe para o caso de estar sendo usado o input e não ser necessário usar o decorador @Output e pelo código ficar mais enxuto

  get imagePath(){
    return `users/${this.avatar}`
  }

  onSelectUser(){
    this.select.emit(this.id);

  }

}
