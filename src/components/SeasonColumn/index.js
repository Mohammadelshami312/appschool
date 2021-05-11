/* Readable Scalable Secure */
import './style.css';

const SeasonColumn = () => {
    const season = 'Seas1';
    const season1 = [
        {
            idStudent: 1,
            mark: 80
        },
        {
            idStudent: 2,
            mark: 60
        },
        {
            idStudent: 3,
            mark: 60
        }
    ];
    return (
        <div className='season'>
            <h2>{season}</h2>
            {
                season1.map((item, index) =>
                (
                    <div>
                        <input type='number' value={item.mark} />
                    </div>
                )
                )
            }
        </div>
    );
}
export default SeasonColumn;