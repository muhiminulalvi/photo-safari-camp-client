

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center pt-14 pb-4">
            <h2 className="font-bold text-4xl text-error py-3">--- {heading} ---</h2>
            <p className="font-semibold text-sm text-secondary">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;