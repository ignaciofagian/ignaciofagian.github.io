import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Fields {
	name: string;
	email: string;
	message: string;
}

interface Errors {
	name?: string;
	email?: string;
	message?: string;
}

interface State {
	sending: boolean;
	alert?: string | undefined;
}

type FieldTypes = 'name' | 'email' | 'message';

export default function GetInTouch() {
	const [fields, setFields] = useState<Fields>({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState<Errors>({});
	const [state, setState] = useState<State>({ sending: false, alert: undefined });

	const handleSendMessage = () => {
		const { name, email, message } = fields;
		const nextErrors: Record<FieldTypes, string | undefined> = {
			email: undefined,
			message: undefined,
			name: undefined,
		};

		if (name?.length === 0) {
			nextErrors.name = 'Name is too short';
		}
		if (!email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			nextErrors.email = 'Email is invalid';
		}
		if (message?.length < 10) {
			nextErrors.message = 'Message is too short';
		}

		if (nextErrors?.name || nextErrors?.email || nextErrors.message) {
			setErrors(nextErrors);
		}
		// is valid
		else {
			setState({ ...state, sending: true });
			// message
			const postEmail = {
				from_name: `${fields.name} - ${fields.email}`,
				reply_to: fields.email,
				to_name: 'Ignacio',
				message: fields.message,
			};
			emailjs.send('service_esf7u5u', 'template_fbj3q65', postEmail, '-gDzzICODzhXCTs4k').then(
				(result: any) => {
					setState({ ...state, alert: 'Message sent', sending: false });
					setFields({ name: '', email: '', message: '' });
				},
				(error: any) => {
					console.log(error.text);
				},
			);
		}
	};

	const onChange = (event: any) => {
		setState({ ...state, alert: undefined, sending: false });
		const name = event.currentTarget.getAttribute('data-name');
		const value = event.target.value;
		setFields({ ...fields, [name]: value });
		if (errors[name as FieldTypes]) {
			setErrors({ ...errors, [name]: false });
		}
	};

	return (
		<section className="getintouch" id="getintouch">
			<div className="container">
				<div className="section-title">Get in Touch</div>
				<div className="row">
					<div className="col-md-6 col-bleed">
						{state.alert && (
							<div className="getintouch-feeback">
								<span>{state.alert}</span>
							</div>
						)}
						<div className="form">
							<div className="form-control">
								<span className="label">Name</span>
								<input
									type="text"
									data-name="name"
									onChange={onChange}
									value={fields.name}
									className={!!errors.name ? 'invalid' : ''}
								/>
								{errors.name && <span className="error-feedback">{errors.name}</span>}
							</div>

							<div className="form-control">
								<span className="label">Email</span>
								<input
									type="email"
									data-name="email"
									onChange={onChange}
									value={fields.email}
									className={!!errors.email ? 'invalid' : ''}
								/>
								{errors.email && <span className="error-feedback">{errors.email}</span>}
							</div>

							<div className="form-control">
								<span className="label">Message</span>
								<textarea
									rows={4}
									data-name="message"
									onChange={onChange}
									value={fields.message}
									className={!!errors.message ? 'invalid' : ''}
								/>
								{errors.message && <span className="error-feedback">{errors.message}</span>}
							</div>
						</div>
						<button className="btn" onClick={handleSendMessage} disabled={!!state.sending}>
							Send Message
						</button>
						{state.sending && <span className="getintouch-status">Sending message</span>}
					</div>
					<div className="col-md-6 col-bleed">
						<div className="getintouch-about">
							<p>
								Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd
								love to hear from you. Simply fill the from and get in touch with me.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
