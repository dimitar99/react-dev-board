export enum MyButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface Props {
    onClick: () => void;
    text: string;
    type: MyButtonType;

}

export const MyButton = (props: Props) => {

    function style() {
        if (props.type === MyButtonType.PRIMARY) {
            return "bg-[#4e8ef6] text-white font-semibold px-4 py-1.5 rounded hover:bg-[#679df6] hover:text-white transition-all shadow-sm"
        } else {
            return "bg-white dark:bg-gray-800 text-black dark:text-white font-semibold px-4 py-1.5 rounded border border-gray-200 dark:border-gray-700 hover:bg-[#4e8ef6] dark:hover:bg-[#4e8ef6] hover:text-white transition-all shadow-sm"
        }
    }

    return (
        <button
            className={style()}
            type="button"
            onClick={props.onClick}>
            {props.text}
        </button>
    )
}