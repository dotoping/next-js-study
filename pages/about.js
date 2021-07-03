import {
    Button,
    Divider,
    Form,
    Header,
    List,
    TextArea,
} from "semantic-ui-react";

export default function About() {
    return (
        <div>
            <Header as="h3" style={{ paddingTop: 40 }} color="teal">
                About Us
      </Header>
            <Divider />
            <List>
                <List.Item>
                    <List.Icon name="users" />
                    <List.Content>Daniel Kang</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>Melbourne, AU</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>
                        <a href="mailto:daniel.dotping@gmail.com">daniel.dotping@gmail.com</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="linkify" />
                    <List.Content>
                        <a href="https://hello-daniels-web.netlify.app/">https://hello-daniels-web.netlify.app/</a>
                    </List.Content>
                </List.Item>
            </List>
            <Header as="h3" style={{ paddingTop: 40 }} color="teal">
                Contact
      </Header>
            <Divider />
            <Form>
                <Form.Field>
                    <label>Title</label>
                    <input />
                </Form.Field>
                <Form.Field>
                    <label>Comments</label>
                    <TextArea />
                </Form.Field>
                <Button color="green">SEND</Button>
            </Form>
        </div>
    );
}