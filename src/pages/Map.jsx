
import { Typography, Row, Col, Input } from 'antd';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const Map = () => {
    return (
        <div style={{ marginTop: "4rem", paddingLeft: "6rem", paddingRight: "6rem" }}>
            <h1 style={{ color: "black", fontWeight: "bold", fontSize: "2.5rem", textAlign: "center" }}>We Are Available<br /> For You 24/7</h1>
            <p style={{ color: "black", fontWeight: "bold", fontSize: "1.5rem", textAlign: "center", marginBottom: "1.25rem" }}>Our online support service is always 24 hours</p>
            <section style={{ backgroundColor: "white", padding: "3rem 1.5rem", borderRadius: "0.5rem" }}>
                <div >
                    <Row gutter={[24, 24]} justify="center" style={{ marginTop: "2.5rem" }}>
                        <Col xs={24} lg={12} style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}>
                            <Row gutter={[24, 24]}>
                                <Col span={24} md={12}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ display: "inline-block", padding: "0.75rem", borderRadius: "9999px", backgroundColor: "#CE1446" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </span>
                                        <div style={{ marginLeft: "1.25rem" }}>
                                            <h2 style={{ marginTop: "0.75rem", fontSize: "1rem", fontWeight: "500", color: "#CE1446" }}>Email</h2>
                                            <p style={{ fontSize: "0.875rem", color: "#737373" }}>Our friendly team is here to help.</p>
                                            <p style={{ fontSize: "0.875rem", color: "#CE1446" }}>hello@.com</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} md={12}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ display: "inline-block", padding: "0.75rem", borderRadius: "9999px", backgroundColor: "#CE1446" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>
                                        <div style={{ marginLeft: "1.25rem" }}>
                                            <h2 style={{ marginTop: "0.75rem", fontSize: "1rem", fontWeight: "500", color: "#CE1446" }}>Live chat</h2>
                                            <p style={{ fontSize: "0.875rem", color: "#737373" }}>Our friendly team is here to help.</p>
                                            <p style={{ fontSize: "0.875rem", color: "#CE1446" }}>Start new chat</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col span={24} md={12}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ display: "inline-block", padding: "0.75rem", borderRadius: "9999px", backgroundColor: "#CE1446" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>
                                        <div style={{ marginLeft: "1.25rem" }}>
                                            <h2 style={{ marginTop: "0.75rem", fontSize: "1rem", fontWeight: "500", color: "#e33226" }}>Office</h2>
                                            <p style={{ fontSize: "0.875rem", color: "#737373" }}>Come say hello at our office HQ.</p>
                                            <p style={{ fontSize: "0.875rem", color: "#CE1446" }}>100 Smith Street Collingwood VIC 3066 AU</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col span={24} md={12}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ display: "inline-block", padding: "0.75rem", borderRadius: "9999px", backgroundColor: "#CE1446" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </span>
                                        <div style={{ marginLeft: "1.25rem" }}>
                                            <h2 style={{ marginTop: "0.75rem", fontSize: "1rem", fontWeight: "500", color: "#CE1446" }}>Phone</h2>
                                            <p style={{ fontSize: "0.875rem", color: "#737373" }}>Mon-Fri from 8am to 5pm.</p>
                                            <p style={{ fontSize: "0.875rem", color: "#CE1446" }}>+1 (555) 000-0000</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} lg={12} style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}>
                            <div style={{ padding: "1.5rem", borderRadius: "0.5rem", backgroundColor: "#f7f7f7" }}>
                                <form>
                                    <Row gutter={[16, 16]} style={{ marginTop: "1rem" }}>
                                        <Col xs={24} md={12}>
                                            <label style={{ marginBottom: "0.5rem", fontSize: "0.875rem", color: "#595959", display: "block" }}>First Name</label>
                                            <Input
                                                placeholder="John"
                                                style={{ borderRadius: "0.5rem" }}
                                            />
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <label style={{ marginBottom: "0.5rem", fontSize: "0.875rem", color: "#595959", display: "block" }}>Last Name</label>
                                            <Input
                                                placeholder="Doe"
                                                style={{ borderRadius: "0.5rem" }}
                                            />
                                        </Col>
                                    </Row>

                                    <div style={{ marginTop: "1rem" }}>
                                        <label style={{ marginBottom: "0.5rem", fontSize: "0.875rem", color: "#595959", display: "block" }}>Email address</label>
                                        <Input
                                            type="email"
                                            placeholder="johndoe@example.com"
                                            style={{ borderRadius: "0.5rem" }}
                                        />
                                    </div>

                                    <div style={{ marginTop: "1rem" }}>
                                        <label style={{ marginBottom: "0.5rem", fontSize: "0.875rem", color: "#595959", display: "block" }}>Message</label>
                                        <TextArea
                                            rows={4}
                                            placeholder="Message"
                                            style={{ borderRadius: "0.5rem" }}
                                        />
                                    </div>
                                    <button style={{ width: "100%", padding: "0.75rem 1.5rem", marginTop: "1rem", fontSize: "0.875rem", fontWeight: "500", color: "white", backgroundColor: "#CE1446", borderRadius: "0.5rem", border: "none", cursor: "pointer" }}>Send message</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <iframe src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    style={{ position: "relative", left: "0", top: "0", width: "100%", height: "500px", borderRadius: "0.5rem 0.5rem 0 0", borderTop: "none" }}
                    allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default Map;

