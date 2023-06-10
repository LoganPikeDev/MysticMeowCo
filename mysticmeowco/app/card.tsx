import { Card } from "react-bootstrap"

export default function Cards() {
    return(
        <Card>
            <Card.Img variant="top" src="/justice.jpg" height={200} style={
                {objectFit: 'cover'}
            } />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-baseline mb-4">
                    <span className="fs-2">Justice</span>
                    <span className="ms-2">$20</span>
                </Card.Title>
                
                
            </Card.Body>

        </Card>
    )
}