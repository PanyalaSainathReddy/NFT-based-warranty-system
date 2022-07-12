from rest_framework import serializers
from users.models import Retailer
from .models import Owner
from django.contrib.auth.password_validation import validate_password


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Retailer
        fields = ('email', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = Retailer.objects.create(
            email=validated_data['email']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class OwnerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Owner
        fields = ['phno', 'name', 'wallet_address', 'id']
