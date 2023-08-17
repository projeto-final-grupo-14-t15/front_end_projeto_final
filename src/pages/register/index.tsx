import { StyledButton, StyledForm, StyledRadius, StyledRaiosName, StyledRegisterDiv, StyledRegisterMain } from "./style"

export const Register= () => {
    return(
        <StyledRegisterMain>
            <StyledRegisterDiv>
                <h2>Cadastro</h2>
                <StyledForm>
                    <p>Informações Pessoais</p>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" placeholder="Nome completo"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Ex: email@mail.com" />
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" placeholder="000.000.000-00"/>
                    <label htmlFor="celular">Celular</label>
                    <input type="text" placeholder="(DDD)00000-0000" />
                    <label htmlFor="birtdate">Data de nascimento</label>
                    <input type="text" placeholder="dd-mm-aaaa"/>
                    <label htmlFor="descryption">Descrição</label>
                    <input type="text" placeholder="insira uma descrição"/>
                    <p>Informações de endereço</p>
                    <label htmlFor="cep">CEP</label>
                    <input type="text" placeholder="00000-000"/>
                    <label htmlFor="state">Estado</label>
                    <input type="text" placeholder="Digite estado"/>
                    <label htmlFor="city">Cidade</label>
                    <input type="text" placeholder="Digite Cidade" />
                    <label htmlFor="street">Rua</label>
                    <input type="text" placeholder="Digitar Rua"/>
                    <label htmlFor="name">Número</label>
                    <input type="text" />
                    <label htmlFor="name">Complemento</label>
                    <input type="text" placeholder="Ex: apto:201"/>
                    <label htmlFor="">Tipo de conta</label>
                    <div>
                        <StyledRaiosName htmlFor="Comprador" >Comprador</StyledRaiosName>
                        <StyledRaiosName htmlFor="Vendedor" >Vendedor</StyledRaiosName>
                        <StyledRadius type="radio" id="Comprador" value={'Comprador'} name="AccountType" required={true} />
                        <StyledRadius type="radio" id="Vendedor" value={'Vendedor'} name="AccountType"/>
                    </div>
                    <label htmlFor="name">Senha</label>
                    <input type="password" placeholder="Digite uma senha"/>
                    <label htmlFor="passwordConfirm">Confirmacao de conta</label>
                    <input type="password" placeholder="confirme a senha"/>

                    <StyledButton>Finalizar Cadastro</StyledButton>

                </StyledForm>
            </StyledRegisterDiv>
        </StyledRegisterMain>
    )
}