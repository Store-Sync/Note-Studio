<script lang="ts">
	import { FluidForm, TextInput, PasswordInput, Link, Button } from 'carbon-components-svelte';

	let email: string = '';
	let password: string = '';
	let invalid: boolean = false;

	$: invalid = email.length > 4 ? !/^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) : false;
</script>

<FluidForm>
	<h1>Log in</h1>
	<br />
	<TextInput
		bind:value={email}
		{invalid}
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
	<Button>Log in</Button>
	<br />
	<br />
	<hr />
	<br />
	<br />
	<center>
		<Button>Sign in with Google</Button>
		<Button kind="secondary">Sign in with Github</Button>
		<br />
		<br />
		<p>
			Haven&apos;t got an account? <Link data-sveltekit-preload-code="" href="/auth/register"
				>Register Here!</Link
			>
		</p>
	</center>
</FluidForm>
