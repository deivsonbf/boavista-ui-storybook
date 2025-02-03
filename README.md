# Boavista UI

Este projeto é uma aplicação front-end desenvolvida em React, destinada a criar e documentar componentes de interface de usuário (UI).

## Descrição

O Boavista UI é uma ferramenta que permite visualizar e testar componentes de UI de forma isolada. Ele facilita o desenvolvimento, documentação e testes de componentes reutilizáveis, garantindo consistência e qualidade na interface do usuário.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Storybook**: Ferramenta de desenvolvimento para UI components.
- **JavaScript/TypeScript**: Linguagens de programação utilizadas no desenvolvimento dos componentes.
- **CSS/SCSS**: Estilos para os componentes.
- **Styled-components**

## Instalação

Para instalar e executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
  ```bash
  git clone https://github.com/deivsonbf/boavista-ui-storybook.git
  ```
2. Navegue até o diretório do projeto:
  ```bash
  cd boavista-ui-storybook
  ```
3. Instale as dependências:
  ```bash
  npm install
  ```

## Estrutura do Projeto

- `src/components`: Diretório contendo os componentes de UI.
- `src/stories`: Diretório contendo as histórias do Storybook para cada componente.
- `public`: Arquivos estáticos públicos.
- `package.json`: Arquivo de configuração do npm com scripts e dependências.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Exemplo
## Componente CustomCheckbox
O componente CustomCheckbox é um checkbox personalizado que pode ser usado da seguinte forma:

import CustomCheckbox from "./components/atomic/atoms/CustomCheckbox";

```function App() {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    console.log("Checkbox changed:", checked);
    console.log("Checkbox value:", value);
  };

  return (
    <CustomCheckbox
      label="Checkbox"
      onChange={handleCheckboxChange}
      value="Checkbox"
    />
  );
}``