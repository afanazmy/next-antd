import { getCurrentLanguage } from "../LanguageSwitcher/config";
import { AppLocale } from "../../dashApp";
import { store } from "../../redux/store";

/**
 * 
 * @param {Object} props 
 * @param {String} props.id key kamus
 * @param {{key: "some values"}} props.values
 */
const getLanguage = (props = {id: null, values: null}) => {
    const { id, values } = props;
    const selectedLanguage = store.getState().auth
        ? store.getState().auth.selectedLanguage
        : undefined
    const currentAppLocale = AppLocale[getCurrentLanguage(selectedLanguage || "EN").locale];
    const { messages, locale } = currentAppLocale;

    if (!messages[id]) {
        console.error(`Key ${id} in language ${locale} not found`);
    }

    if (values) {
        let str = messages[id] ? messages[id] : id;
        
        Object.keys(values).map(key => str = str.replace(`{${key}}`, values[key]));
        return str;
    }
    return messages[id] ? messages[id] : id;
}

export default getLanguage;