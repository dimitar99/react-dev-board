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
            return "bg-[#4e8ef6] text-white font-semibold px-4 py-1.5 rounded hover:bg-[#679df6] hover:text-white transition-all"
        } else {
            return "bg-white text-black font-semibold px-4 py-1.5 rounded border border-gray-200 hover:bg-[#4e8ef6] hover:text-white transition-all"
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