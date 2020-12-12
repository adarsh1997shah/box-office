export const dateFormatter = date => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
        newDate
    );
};
