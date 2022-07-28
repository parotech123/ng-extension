import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
	selector: 'app-divider-text',
	templateUrl: './divider-text.component.html',
	styleUrls: ['./divider-text.component.scss'],
	standalone: true,
	imports: [MatDividerModule, CommonModule]
})
export class DividerTextComponent implements OnInit {


	@Input() text: string = ""
	@Input() size: number = 12
	@Input() alignCenter: boolean = true

	constructor() { }

	ngOnInit(): void {
	}

}