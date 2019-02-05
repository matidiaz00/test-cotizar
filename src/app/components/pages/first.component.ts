import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Forex } from '../../interfaces/forex';
import { ForexService } from '../../services/forex.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {

  usdValue: number;
  eurValue: number;

  constructor(private forexService: ForexService) { }

  onSubmit(form: NgForm) {
    this.forexService.getForex()
      .subscribe((data:Forex) =>
        this.eurValue = this.resetCurrency(form.value.usd) / data.rates.USD
      );
  }

  resetCurrency(value: string) {
    var num = value.replace(/[$,€,]/g, "");
    return Number(num);
  }

  ngOnInit() {}

}
