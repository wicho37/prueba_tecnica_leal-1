/* import MOCK_DATA from "../data/MOCK_DATA" */
import MOCK_DATA from "../data/MOCK_DATA.json"


export const pedirDatos = () => {
    return new Promise((resolve) => {
        resolve(MOCK_DATA)
    })
}