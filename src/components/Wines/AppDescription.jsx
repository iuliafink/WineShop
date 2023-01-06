 import classes from './AppDescription.module.css';

const AppSummary = () => {
    return (
        <section className={classes.description}>
            <h2>Welcome to the biggest international wine selection in Romania.</h2>
            <p>¿Wine Not? is a new concept presented to you by our young team consisting of wine aficionado and sommeliers.</p>
            <p>We specializes solely and exclusively in the sale of wine and wine related products.</p>
            <p>Choose from our fine wine selection and have your favorite bottles delivered in less than 3 days at your doorstep.</p>
        </section>
    );
};

export default AppSummary;