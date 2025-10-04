export default function ContactCard({img, name, phone, email})
{
    return (
        <article className="contact-card">
                <img
                    src={img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img
                        src="./images-Ch5/phone-icon.png"
                        alt="phone icon"
                    />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img
                        src="./images-Ch5/mail-icon.png"
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>
    )
}

