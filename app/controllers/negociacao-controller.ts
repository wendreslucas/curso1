import { Negociacoes} from "../models/negociacoes.js"
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from "../views/negociacoes-view.js"
import { MensagemView } from "../views/mensagem-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }
  
  adiciona(): void {
    const negociacao = this.criaNegociacao();    
    this.negociacoes.adiciona(negociacao);
    this.negociacoesView.update(this.negociacoes)
    this.mensagemView.update('Sucesso!')
    console.log(this.negociacoes.lista());
    this.limparFormulario();
  }

  limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '1'
    this.inputValor.value = '0.0'
    this.inputData.focus();
  }
}