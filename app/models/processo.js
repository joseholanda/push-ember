import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  instancia: attr('string'),
  circunscricao: attr('string'),
  numero: attr('string'),
  numeroCnj: attr('string'),
  vara: attr('string'),
  feito: attr('string'),
  segredoDeJustica: attr('boolean'),
  linkDoProcesso: attr('string')

  /*private String sistema;
  private String instancia;
  private String circunscricao;
  private String codigoDaCircunscricao;
  private String numero;
  private String numeroCnj;
  private String vara;
  private String naturezaDaVara;
  private String classeProcessual;
  private String assunto;
  private String feito;
  private Boolean segredoDeJustica;
  private List < String > autores;
  private List < String > reus;
  private boolean outrosAutores = false;
  private boolean outrosReus = false;
  private List < String > advogadosAutores;
  private List < String > advogadosReus;
  private String linkDoProcesso;
  private List < Movimentacao > movimentacoes;*/
});
