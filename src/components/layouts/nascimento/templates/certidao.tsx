export const Certidao = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
      <div className="printable" style={{
        width: '100%',
        padding: '15rem 2rem 2rem 2rem'
      }}>
        <h1 style={{ textAlign: 'center', fontSize: 24 }}>CERTIDÃO DE NASCIMENTO</h1>
        <p style={{ textAlign: 'center' }}>NOME</p>
        <p style={{ textAlign: 'center' }}>{'{'}{'{'}name{'}'}{'}'}</p>
        <div className="d-flex mb-2">
          <div className="col-12">
            <label htmlFor="input1">
              <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                CPF
              </span>
            </label>
            <input id="input1" className="form-control mt-n3" defaultValue="{{document}}" />
          </div>
        </div>
        <p style={{ textAlign: 'center' }}>MATRÍCULA</p>
        <p style={{ textAlign: 'center' }}>{'{'}{'{'}registration{'}'}{'}'}</p>
        <div className="form-group">
          <div className="d-flex mb-2">
            <div className="col-8">
              <label htmlFor="input1">
                <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                  DATA DE NASCIMENTO POR EXTENSO
                </span>
              </label>
              <input id="input1" className="form-control mt-n3" defaultValue="{{extendBirthDate}}" />
            </div>
            <div className="col-1">
              <label htmlFor="input2">
                <span className="h6 small bg-white text-muted pt-0 pl-2 pr-2">
                  DIA
                </span>
              </label>
              <input id="input2" className="form-control mt-n3" defaultValue="{{birthDay}}" />
            </div>
            <div className="col-1">
              <label htmlFor="input2">
                <span className="h6 small bg-white text-muted pt-0 pl-2 pr-2">
                  MÊS
                </span>
              </label>
              <input id="input2" className="form-control mt-n3" defaultValue="{{birthMonth}}" />
            </div>
            <div className="col-2">
              <label htmlFor="input2">
                <span className="h6 small bg-white text-muted pt-0 pl-2 pr-2">
                  ANO
                </span>
              </label>
              <input id="input2" className="form-control mt-n3" defaultValue="{{birthYear}}" />
            </div>
          </div>
          <div className="d-flex mb-2">
            <div className="col-4">
              <label htmlFor="input1">
                <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                  HORA
                </span>
              </label>
              <input id="input1" className="form-control mt-n3" defaultValue="{{extendBirthDate}}" />
            </div>
            <div className="col-8">
              <label htmlFor="input2">
                <span className="h6 small bg-white text-muted pt-0 pl-2 pr-2">
                  NATURALIDAE
                </span>
              </label>
              <input id="input2" className="form-control mt-n3" defaultValue="{{birthYear}}" />
            </div>
          </div>
          <div className="d-flex mb-2">
            <div className="col-5">
              <label htmlFor="input1">
                <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                  MUNICÍPIO DE REGISTRO E UNIDADE DA FEDERAÇÃO
                </span>
              </label>
              <input id="input1" className="form-control mt-n3" defaultValue="{{extendBirthDate}}" />
            </div>
            <div className="col-5">
              <label htmlFor="input2">
                <span className="h6 small bg-white text-muted pt-0 pl-2 pr-2">
                  LOCAL DO NASCIMENTO
                </span>
              </label>
              <input id="input2" className="form-control mt-n3" defaultValue="{{birthYear}}" />
            </div>
            <div className="col-2">
              <label htmlFor="input2">
                <span className="h6 small bg-white text-muted pt-0 pl-2 pr-2">
                  SEXO
                </span>
              </label>
              <input id="input2" className="form-control mt-n3" defaultValue="{{birthYear}}" />
            </div>
          </div>
          <div className="d-flex mb-2">
            <div className="col-12">
              <label htmlFor="input1">
                <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                  FILIAÇÃO
                </span>
              </label>
              <input id="input1" className="form-control mt-n3" defaultValue="{{extendBirthDate}}" />
            </div>
          </div>
          <div className="d-flex mb-2">
            <div className="col-12">
              <label htmlFor="input1">
                <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                  AVÓS
                </span>
              </label>
              <input id="input1" className="form-control mt-n3" defaultValue="{{extendBirthDate}}" />
            </div>
          </div>
          <div className="d-flex mb-2">
            <div className="col-2">
              <label htmlFor="input1">
                <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                  GÊMEO
                </span>
              </label>
              <input id="input1" className="form-control mt-n3" defaultValue="{{extendBirthDate}}" />
            </div>
            <div className="col-10">
              <label htmlFor="input1">
                <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                  NOME E MATRÍCULA DO(S) GÊMEO(S)
                </span>
              </label>
              <input id="input1" className="form-control mt-n3" defaultValue="{{extendBirthDate}}" />
            </div>
          </div>
          <div className="d-flex mb-2">
            <div className="col-8">
              <label htmlFor="input1">
                <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                  DATA DO REGISTRO POR EXTENSO
                </span>
              </label>
              <input id="input1" className="form-control mt-n3" defaultValue="{{extendBirthDate}}" />
            </div>
            <div className="col-4">
              <label htmlFor="input1">
                <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                  NÚMERO DA DECLARAÇÃO NASCIDO VIVO
                </span>
              </label>
              <input id="input1" className="form-control mt-n3" defaultValue="{{extendBirthDate}}" />
            </div>
          </div>
          <div className="d-flex mb-2">
            <div className="col-12">
              <label htmlFor="input1">
                <span className="h6 small bg-white text-muted pt-1 pl-2 pr-2">
                  OBSERVAÇÕES AVERBAÇÕES
                </span>
              </label>
              <input id="input1" className="form-control mt-n3" defaultValue="{{extendBirthDate}}" />
            </div>
          </div>
        </div>
        <div className="d-flex mb-2">
          <div className="col-6">
            <dl className="row">
              <dt className="col-6">NOME DO OFÍCIO</dt>
              <dd className="col-6">NOME DO OFÍCIO</dd>
              <dt className="col-6">OFICIAL REGISTRADOR</dt>
              <dd className="col-6">OFICIAL REGISTRADOR</dd>
              <dt className="col-6">MUNICÍPIO/UF</dt>
              <dd className="col-6">MUNICÍPIO/UF</dd>
              <dt className="col-6">ENDEREÇO</dt>
              <dd className="col-6">ENDEREÇO</dd>
              <dt className="col-6">TELEFONE</dt>
              <dd className="col-6">TELEFONE</dd>
              <dt className="col-6">EMAIL</dt>
              <dd className="col-6">EMAIL</dd>
            </dl>
          </div>
          <div className="col-6">
            <p>O conteúdo da certidão é verdadeiro. Dou fé.</p>
            <br />
            <hr />
            <p>Assinatura do Oficial</p>
          </div>
        </div>
      </div>
    </div>
  );
}