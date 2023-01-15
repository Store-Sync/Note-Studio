<script lang="ts">
	import { Form, TextInput, PasswordInput, Link, Button } from 'carbon-components-svelte';

	let email: string = '';
	let password: string = '';
	let invalid: boolean = false;

	$: invalid = email.length > 4 ? !/^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) : false;
</script>

<Form action="?/register" method="POST">
	<h1>Register</h1>
	<br />
	<TextInput
		bind:value={email}
		{invalid}
		type="email"
		invalidText="This email is not valid, please enter a valid email to continue!"
		labelText="Email"
		placeholder="Enter your email..."
		required
	/>
	<br />
	<PasswordInput
		bind:value={password}
		required
		type="password"
		labelText="Password"
		placeholder="Enter password..."
	/>
	<br />
	<Button type="submit">Register</Button>
	<br />
	<br />
	<hr />
	<br />
	<br />
	<center>
		<Button>Register with Google</Button>
		<Button kind="secondary">Register with Github</Button>
		<br />
		<br />
		<p>
			Got an account? <Link data-sveltekit-preload-code="" href="/auth/login">Login Here!</Link>
		</p>
	</center>
</Form>
