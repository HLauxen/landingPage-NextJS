import styles from './spacing.module.css'

interface SpacingProps {
    text: string
}

export default function Spacing(props: SpacingProps) {
    const showText = props.text
    
    return(
        <div className={styles.container}>
            <p>
                {showText}
            </p>
        </div>
    )
}