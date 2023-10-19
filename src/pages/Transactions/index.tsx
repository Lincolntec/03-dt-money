import { Headers } from "../../components/Headers";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SarchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Headers />
            <Summary />
            <TransactionsContainer >
                <SearchForm />
                <TransactionsTable>
                    <tbody>

                        <tr>
                            <td width="45%">Desenvolvimento de site.</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>

                            </td>

                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="45%">Hamburger.</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    -R$ 59,00
                                </PriceHighlight>

                            </td>

                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>

                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>

        </div>
    )
}