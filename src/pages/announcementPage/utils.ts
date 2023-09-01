
export const capitalizeFirstLetter = (inputString: string) => {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}
export const formatNumber = (number: number | string) => {
    const numStr = number.toString();
    const [integerPart, decimalPart = ""] = numStr.split(".");
    const formattedIntegerPart = integerPart.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        "."
    );
    const formattedDecimalPart = decimalPart.padEnd(2, "0");
    const formattedNumber = `${formattedIntegerPart},${formattedDecimalPart}`;
    return formattedNumber;
}

export const handleClickWhatsApp = (model:string, year:string) => {
    const phoneNumber = "+553399205945";
    const message = encodeURIComponent(
        `Olá! Gostaria de mais informações sobre o ${model}, ano ${year}!`
    );
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, "_blank");
};


export const getInitials = (name: string) => {
    const words = name.split(" ");
    let initials = "";

    for (const word of words) {
        if (word.length > 0) {
            initials += word[0].toUpperCase();
        }
    }

    return initials.slice(0, 2);
};