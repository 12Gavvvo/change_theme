export default function Form ()
{
    return (
        <div>
            <strong>Welcome Back!</strong>
            <div>
                <div>
                    <label>Email</label>
                    <input className={''} placeholder={'Enter your email'} type="text"/>
                </div>
                <div>
                    <label>Password</label>
                    <input className={''} placeholder={'Enter your password'} type="password"/>
                </div>
                <div>
                    <input id={'remember'}  className={''} placeholder={'Enter your password'} type="checkbox"/>
                    <label htmlFor={'remember'}>Remember me for 30 days</label>
                </div>
                <button>Forgot password?</button>
            </div>
        </div>
    )
}