import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MeetingFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  preferredDate: string;
  preferredTime: string;
  timeZone: string;
  meetingType: string;
  agenda: string;
}

export default function MeetingScheduler() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<MeetingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    preferredDate: "",
    preferredTime: "",
    timeZone: "EST",
    meetingType: "consultation",
    agenda: ""
  });

  const validateManagerEmail = (email: string): boolean => {
    const managerDomains = [
      // Common business domains (not personal)
      'company.com', 'corp.com', 'business.com', 'enterprise.com',
      // Exclude personal email domains
      '!gmail.com', '!yahoo.com', '!hotmail.com', '!outlook.com', 
      '!aol.com', '!icloud.com', '!protonmail.com', '!mail.com'
    ];
    
    const emailDomain = email.split('@')[1];
    const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'protonmail.com', 'mail.com'];
    
    return !personalDomains.includes(emailDomain.toLowerCase());
  };

  const handleInputChange = (field: keyof MeetingFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }

      // Validate manager email
      if (!validateManagerEmail(formData.email)) {
        toast({
          title: "Invalid Email Address",
          description: "Please use a business email address, not a personal email (Gmail, Yahoo, Hotmail, etc.).",
          variant: "destructive",
        });
        return;
      }

      // Submit the meeting request
      const response = await fetch('/api/schedule-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to schedule meeting');
      }

      toast({
        title: "Meeting Scheduled Successfully!",
        description: "You'll receive a confirmation email shortly. We'll contact you within 24 hours to confirm the details.",
      });

      // Reset form and close dialog
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        preferredDate: "",
        preferredTime: "",
        timeZone: "EST",
        meetingType: "consultation",
        agenda: ""
      });
      setIsOpen(false);

    } catch (error) {
      toast({
        title: "Failed to Schedule Meeting",
        description: "Please try again or contact us directly at info@itnoa.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="group flex items-center text-green-100 p-3 rounded-lg hover:bg-green-800/30 transition-all duration-300 w-full text-left transform hover:scale-105">
          <Calendar className="h-5 w-5 mr-3 text-[#21965f] group-hover:text-white transition-all duration-500 meeting-glow" />
          <span className="font-medium group-hover:text-white transition-colors duration-300">Schedule A Meeting</span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[420px] sm:max-w-[600px] max-h-[85vh] overflow-y-auto m-2 p-3 sm:p-6">
        <DialogHeader className="pb-4">
          <DialogTitle className="flex items-center text-lg sm:text-xl font-bold text-[#01411c]">
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
            Schedule a Consultation
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Book a meeting with our cybersecurity experts.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Business Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="manager@company.com"
                required
              />
              <p className="text-xs text-slate-500 mt-1">
                Please use a business email address (not personal Gmail, Yahoo, etc.)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  placeholder="IT Manager, CISO, etc."
                />
              </div>
            </div>
          </div>

          {/* Meeting Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Meeting Preferences</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="preferredDate">Preferred Date</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="timeZone">Time Zone</Label>
                <Select value={formData.timeZone} onValueChange={(value) => handleInputChange('timeZone', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EST">Eastern (EST)</SelectItem>
                    <SelectItem value="CST">Central (CST)</SelectItem>
                    <SelectItem value="MST">Mountain (MST)</SelectItem>
                    <SelectItem value="PST">Pacific (PST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="meetingType">Meeting Type</Label>
                <Select value={formData.meetingType} onValueChange={(value) => handleInputChange('meetingType', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Initial Consultation</SelectItem>
                    <SelectItem value="assessment">Security Assessment</SelectItem>
                    <SelectItem value="compliance">Compliance Discussion</SelectItem>
                    <SelectItem value="audit">Audit Planning</SelectItem>
                    <SelectItem value="training">Security Training</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="agenda">Meeting Agenda / Topics to Discuss</Label>
              <Textarea
                id="agenda"
                value={formData.agenda}
                onChange={(e) => handleInputChange('agenda', e.target.value)}
                placeholder="Please describe your cybersecurity needs, compliance requirements, or specific topics you'd like to discuss..."
                rows={4}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-slate-200 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isSubmitting}
              className="w-full sm:w-auto order-2 sm:order-1 px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#01411c] hover:bg-[#012d13] text-white w-full sm:w-auto order-1 sm:order-2 px-6 py-3"
            >
              {isSubmitting ? (
                <>
                  <User className="h-4 w-4 mr-2 animate-spin" />
                  Scheduling...
                </>
              ) : (
                <>
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}