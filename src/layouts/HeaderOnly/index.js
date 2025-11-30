import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div className="Content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
