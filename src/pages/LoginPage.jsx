import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Link, useNavigate } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Checkbox } from '@/components/ui/checkbox';
    import { LogIn, UserPlus, Zap, Eye, EyeOff } from 'lucide-react';
    import { useToast } from "@/components/ui/use-toast";

    const LoginPage = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);
      const [rememberMe, setRememberMe] = useState(false);
      const { toast } = useToast();
      const navigate = useNavigate();

      const handleLogin = (e) => {
        e.preventDefault();
        // Basic validation
        if (!email || !password) {
          toast({
            title: "Error",
            description: "Please enter both email and password.",
            variant: "destructive",
          });
          return;
        }
        // Placeholder login logic
        console.log("Login attempt with:", { email, password, rememberMe });
        toast({
          title: "Login Successful!",
          description: "Welcome back to NovaSpark!",
        });
        // Redirect to homepage or dashboard after successful login
        navigate('/'); 
      };

      return (
        <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-100 to-sky-100 py-12 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200"
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <Link to="/" className="flex justify-center mb-6">
                <Zap size={48} className="text-primary" />
              </Link>
              <h1 className="text-center text-3xl font-bold tracking-tight text-slate-800">
                Sign in to NovaSpark
              </h1>
              <p className="mt-2 text-center text-sm text-slate-600">
                Or{' '}
                <Link to="/signup" className="font-medium text-primary hover:text-primary/80">
                  create a new account
                </Link>
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <Label htmlFor="email-address" className="sr-only">Email address</Label>
                  <Input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2.5 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm h-11"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Label htmlFor="password" className="sr-only">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2.5 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm h-11"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-slate-500 hover:text-primary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox 
                    id="remember-me" 
                    name="remember-me"
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                  />
                  <Label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                    Remember me
                  </Label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-primary hover:text-primary/80">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <Button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary h-11">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LogIn className="h-5 w-5 text-primary-foreground group-hover:text-white transition-colors" aria-hidden="true" />
                  </span>
                  Sign in
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-slate-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3"> {/* Placeholder for social logins */}
                <div>
                  <Button variant="outline" className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 h-11">
                    <img  className="h-5 w-5 mr-2" alt="Google logo" src="https://images.unsplash.com/photo-1663090859310-97a1af639a29" />
                    Sign in with Google
                  </Button>
                </div>
              </div>
            </div>
            <p className="mt-8 text-center text-xs text-slate-500">
              By signing in, you agree to our{' '}
              <Link to="/terms" className="font-medium text-slate-600 hover:text-primary">Terms of Service</Link> and{' '}
              <Link to="/privacy" className="font-medium text-slate-600 hover:text-primary">Privacy Policy</Link>.
            </p>
          </motion.div>
        </div>
      );
    };

    export default LoginPage;